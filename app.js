const {
    createApp
} = Vue;

const text = {
    props: {
        nombre: String,
        edad: Number,
        fecha: Date
    },
    template: `
    <table>
       <tr>
         <th class="text-bold" style="color:Blue">{{nombre}}</th>
       </tr>
        <tr>
            <th class = "text-bold" style="color:yellow" > {{ edad }} </th> 
        </tr>
        <tr>
            <th class = "text-bold" style="color:white"> {{ fecha }} </th>  
        </tr>
     </table>  
  `
}





createApp({
    components: {
        'text-component': text,

    },
    data() {
        return {

        }
    }
}).mount("#app")