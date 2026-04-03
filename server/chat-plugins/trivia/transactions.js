"use strict";
/**
 * SQL transactions for the Trivia plugin.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactions = void 0;
exports.transactions = {
    addHistory: (args, env) => {
        const gameHistoryInsertion = env.statements.get(args.gameHistoryInsertion);
        const scoreHistoryInsertion = env.statements.get(args.scoreHistoryInsertion);
        if (!gameHistoryInsertion || !scoreHistoryInsertion)
            throw new Error('Statements not found');
        for (const game of args.history) {
            const { lastInsertRowid } = gameHistoryInsertion.run(game.mode, game.length, game.category, game.startTime, game.creator, Number(game.givesPoints));
            for (const userid in game.scores) {
                scoreHistoryInsertion.run(lastInsertRowid, userid, game.scores[userid]);
            }
        }
        return true;
    },
    editQuestion(args, env) {
        // Question editing is likely to be infrequent, so I've optimized for readability and proper argument checking
        // rather than performance (i.e. not passing in prepared statements).
        const { oldQuestionText, newQuestionText, newAnswers } = args;
        if (newAnswers) {
            const questionID = env.db
                .prepare('SELECT question_id FROM trivia_questions WHERE question = ?')
                .get(oldQuestionText)?.question_id;
            if (!questionID)
                throw new Error('Question not found');
            env.db.prepare('DELETE FROM trivia_answers WHERE question_id = ?').run(questionID);
            const insert = env.db.prepare('INSERT INTO trivia_answers (question_id, answer) VALUES (?, ?)');
            for (const answer of newAnswers) {
                insert.run([questionID, answer]);
            }
        }
        if (newQuestionText) {
            env.db
                .prepare(`UPDATE trivia_questions SET question = ? WHERE question = ?`)
                .run([newQuestionText, oldQuestionText]);
        }
    },
    addQuestions: (args, env) => {
        const questionInsertion = env.statements.get(args.questionInsertion);
        const answerInsertion = env.statements.get(args.answerInsertion);
        if (!questionInsertion || !answerInsertion)
            throw new Error('Statements not found');
        const isSubmissionForSQLite = Number(args.isSubmission);
        for (const question of args.questions) {
            const { lastInsertRowid } = questionInsertion.run(question.question, question.category, question.addedAt, question.user, isSubmissionForSQLite);
            for (const answer of question.answers) {
                answerInsertion.run(lastInsertRowid, answer);
            }
        }
        return true;
    },
};
