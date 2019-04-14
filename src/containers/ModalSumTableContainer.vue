<template>
    <Modal v-if='tableModal' :onClose='toggleTableModal'>
        <Flex contentHorizontalAlign='center' >
            <table v-if='tableData.length'>
                <tr>
                    <th>Sum</th>
                    <th>Date</th>
                    <th>IP</th>
                    <th>Browser</th>
                </tr>
                <tr v-for='(tableRow, index) in tableData' :key="index">
                    <td>{{tableRow.sum}}</td>
                    <td>{{tableRow.date}}</td>
                    <td>{{tableRow.ip}}</td>
                    <td>{{tableRow.browser}}</td>
                </tr>
            </table>
            <Typography v-else textSize='xsmall' textWeight='light' textColor='grey'>There is no data in table</Typography>
        </Flex>
    </Modal>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import { State, Mutation } from 'vuex-class';
    import Modal from '@/components/Modal.vue';
    import Flex from '@/components/Flex.vue';
    import Typography from '@/components/Typography.vue';
    import { CalcApproach } from '@/types/Calc.types';
    import { ServicSumTableInterface } from '@/types/Service.types';
    import { getSumTable } from '@/service/index';

    @Component({
        components: {
            Modal,
            Flex,
            Typography,
        },
    })
    export default class ModalSumTableContainer extends Vue {
        @State('tableModal')
        private tableModal!: boolean;

        @Mutation('toggleTableModal')
        private toggleTableModal!: ()  => void;

        private tableData: ServicSumTableInterface[] = [] as ServicSumTableInterface[];

        @Watch('tableModal')
        private async checkModalOpen(modalState: boolean) {
            if (modalState) {
                this.tableData = await getSumTable();
            }
        }
    }
</script>

<style lang="scss" scoped>
    table, th, tr, td {
        border: 1px solid black;
    }
</style>



