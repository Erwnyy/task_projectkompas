<template>
  <div class="my-10">
    <center>
      <h1>Diari jajan Februari 2023</h1>
      <p>Pengeluaran bulan ini Rp {{groupByDate}}</p>
      <div class="mt-5">
        <AppButton label="Tambah Item" v-on:click="toggleModal()" class="bg-blue-900 text-blue-50"/>
      </div>
    </center>

    <div class="w-[100%] flex flex-wrap justify-center my-10">
        <div v-for="item of items" :key="item" class=" border-solid border-2 border-slate-800 m-2 p-2">
          <h2><b>{{ formatDate(item.tanggal) }}</b></h2>
          <div class="px-6 py-1 flex border-solid border-b-2 border-b-slate-800 justify-between">
            <p class="mr-2">{{ item.jam }}</p>
            <p class="text-gray-700 text-base mr-2">
              {{ item.nama }}
            </p>
            <p>Rp.{{ item.pengeluaraan }}</p>
          </div>
          <div class=" w-[95%] mt-4 flex justify-end">
            <p class="mr-3"><b>Total</b></p>
            <p><b>Rp 10.000</b></p>
          </div>
        </div>
    </div>



  <div>
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-4xl">
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Tambah Entri
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class=" p-6 flex flex-col">
            <input v-model="itemName" class="border-gray-600 bg-slate-200 p-[0.5rem] rounded-lg "/>
            <input v-model="itemHarga" class="border-gray-600 bg-slate-200 p-[0.5rem] rounded-lg mt-1" type="number"/>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Batal
            </button>
            <button @click="addItem()" class="hover:bg-blue-500 bg-blue-900 p-9 text-white background-transparent font-bold uppercase px-9 py-3 mx-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton'
import axios from "axios";
import moment from 'moment'

function groupBy(objectArray) {
  const acc1 = objectArray.reduce((acc, obj) => {
    const { tanggal } = obj;
    acc[tanggal] = acc[tanggal] ?? [];
    acc[tanggal].push(obj);
    return acc

  }, {});
    console.log(acc1, 'GROUB BY DATE')
}

export default {
  name: 'IndexPage',
  data () {
    return {
      msg: 'Welcome to vue-atomic-design-template',
      showModal: false,
      items: [],
      groupByDate: [],
      itemName: "",
      itemHarga:"",
      itemTanggal:new Date()
    }
    
  },
  
  async created() {
    try {
      const res = await axios.get(`http://localhost:3001/detail`);
      this.items = res.data;
      const respon = res.data
      this.groupByDate = groupBy(respon)
      
    } catch (error) {
      console.log(error);
    }
  },
  components: {
    AppButton,
  },
  computed:{
  groups(){
    return groupBy(this.items, 'groupName')
  }
},
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    },
    formatDate(date) {
      return moment(date).format("DD MMM YYYY")
    },
    async addItem() {
      try {
      const res = await axios.post(`http://localhost:3001/detail`, {
        nama: this.itemName,
        pengeluaraan: this.itemHarga,
        tanggal: this.itemTanggal
      });
      this.items = [...this.items, res.data];
      this.itemName = "";
      this.itemHarga = "";
      this.itemTanggal = "";
      
      } catch (e) {
        console.error(e);
      }
    },
    async click() {
      this.groupByDate.push({ name: 'Banana', amount: 4 })
    },
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
</style>
