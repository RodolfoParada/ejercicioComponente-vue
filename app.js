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
         <th class="text-bold">{{nombre}}</th>
       </tr>
        <tr>
            <th class = "text-bold"> {{ edad }} </th> 
        </tr>
        <tr>
            <th class = "text-bold"> {{ fecha }} </th>  
        </tr>

  `
}





createApp({
    components: {
        'text-component': text,

    },
    data() {
        return {

            tituloIndex: "Hola desde index",
            titulo: "Pizza Napoletana",
            portada: "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg",
            costo: 675.00,
            codermeals: [{
                    id: 1,
                    titulo: "Spaghetti alla puttanesca",
                    costo: 575.00,
                    portada: "https://4.bp.blogspot.com/-D5Wvi_gX_Kg/WLatk_GVnKI/AAAAAAAAA5M/-y0gB26R0Dkb01QmdgfZqQALtd9NMV2DACLcB/s1600/P70301-072354.jpg"
                },
                {
                    id: 2,
                    titulo: "Pizza Napoletana ai carciofi",
                    costo: 675.00,
                    portada: "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg"
                },
                {
                    id: 3,
                    titulo: "Porchetta umbra a cottura lunga",
                    costo: 845.00,
                    portada: "https://www.fontecesia.it/wp-content/uploads/2018/11/porchetta-umbra-1920x1280.jpg"
                },
                {
                    id: 4,
                    titulo: "Orecchiette alle cime di rapa",
                    costo: 845.00,
                    portada: "https://irepo.primecp.com/2016/03/259860/recipe-8673_ExtraLarge1000_ID-1461628.jpg"
                }
            ]

        }
    }
}).mount("#app")