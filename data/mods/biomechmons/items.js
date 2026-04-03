"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
exports.Items = {
    airballoon: {
        inherit: true,
        // airborneness implemented in sim/pokemon.js:Pokemon#isGrounded
        onDamagingHit(damage, target, source, move) {
            this.add('-enditem', target, 'Air Balloon');
            if (target.item === 'airballoon') {
                target.item = '';
                this.clearEffectState(target.itemState);
            }
            else {
                const isBMM = target.volatiles['item:airballoon']?.inSlot;
                if (isBMM) {
                    target.removeVolatile('item:airballoon');
                    target.m.scrambled.items.splice(target.m.scrambled.items.findIndex(e => this.toID(e.thing) === 'airballoon' && e.inSlot === isBMM), 1);
                    if (isBMM === 'Ability')
                        target.setAbility('No Ability');
                }
            }
            this.runEvent('AfterUseItem', target, null, null, this.dex.items.get('airballoon'));
        },
        onAfterSubDamage(damage, target, source, effect) {
            this.debug('effect: ' + effect.id);
            if (effect.effectType === 'Move') {
                this.add('-enditem', target, 'Air Balloon');
                if (target.item === 'airballoon') {
                    target.item = '';
                    this.clearEffectState(target.itemState);
                }
                else {
                    const isBMM = target.volatiles['item:airballoon']?.inSlot;
                    if (isBMM) {
                        target.removeVolatile('item:airballoon');
                        target.m.scrambled.items.splice(target.m.scrambled.items.findIndex(e => this.toID(e.thing) === 'airballoon' && e.inSlot === isBMM), 1);
                        if (isBMM === 'Ability')
                            target.setAbility('No Ability');
                    }
                }
                this.runEvent('AfterUseItem', target, null, null, this.dex.items.get('airballoon'));
            }
        },
    },
};
