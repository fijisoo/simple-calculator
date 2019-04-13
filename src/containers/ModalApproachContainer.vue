<template>
    <Modal v-if='approachModal' :onClose='toggleApproachModal'>
        <Typography textSize='initial' textColor='black'>
            Due to the problems with decimal precision in javascript this settings was 
            created for choosing calculation approach, between vanilla solution and using big.js dependency.
        </Typography>
        <Flex contentHorizontalAlign='center' >
            <input type="radio" id="vanillaApproach" v-model="approach" :value="vanillaApporach">
            <label for="contactChoice1">Vanilla Approach</label>

            <input type="radio" id="bigJsDependency" v-model="approach" :value="bigJsDependency">
            <label for="bigJsDependency">Big.js dependency approach</label>
        </Flex>
    </Modal>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import { State, Mutation } from 'vuex-class';
    import Modal from '@/components/Modal.vue';
    import Typography from '@/components/Typography.vue';
    import Flex from '@/components/Flex.vue';
    import { CalcApproach } from '../types/Calc.types';

    @Component({
        components: {
            Modal,
            Typography,
            Flex,
        },
    })
    export default class ModalApproachContainer extends Vue {
        private approach: CalcApproach = this.$store.state.calcApproach;
        private vanillaApporach: CalcApproach = CalcApproach.VANILLA;
        private bigJsDependency: CalcApproach = CalcApproach.DEPENDENCY;

        @State('approachModal')
        private approachModal!: boolean;

        @Mutation('toggleApproachModal')
        private toggleApproachModal!: (modalState: boolean)  => void;

        @Mutation('setApproach')
        private setApproach!: (newApproach: CalcApproach)  => void;

        @Watch('approach')
        private onApproachChange(newApproach: CalcApproach) {
            this.setApproach(newApproach);
        }
    }
</script>


