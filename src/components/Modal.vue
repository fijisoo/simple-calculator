<template>
    <Flex
        @click.native.self='onClose()' 
        :fullFlex='true' 
        contentVerticalAlign='center' 
        contentHorizontalAlign='center' 
        :class="modalClass"
    >
        <div :class='modalContentClass'>
            <Flex :fullFlexWidth='true' contentHorizontalAlign='flexEnd'>
                <Typography @click.native.self='onClose()' :class='modalCloseBtnClass' textColor='black'>Close</Typography>
            </Flex> 
            <div :class='modalContentSlotClass'>
                <slot />
            </div>       
        </div>   
    </Flex>   
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Flex from '@/components/Flex.vue';
    import Typography from '@/components/Typography.vue';

    @Component({
        components: {
            Flex,
            Typography,
        },
    })
    export default class Modal extends Vue {
        private modalClass: string = 'modal';
        private modalContentClass: string = 'modal-content';
        private modalCloseBtnClass: string = 'modal-close-btn';
        private modalContentSlotClass: string = 'modal-content-slot';

        @Prop({
            type: Function,
            default: () => { return; },
        }) private onClose?: () => void;
    }
</script>

<style lang="scss" scoped>
   .modal {
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
   }

   .modal-content {
        min-width: 320px;
        width: 50%;
        height: 50%;
        background-color: white;
   }

   .modal-close-btn {
       font-size: 1.5vmax;
       margin-right: 0;
   }

   .modal-content-slot {
       padding: 0 2em;
   }
</style>


