import { ref } from 'vue'

function makeHTTPRequest(url,method,dataP)
{
const data = ref()
const error=ref()
    fetch('https://luxurywatches-jedlik.koyeb.app/api'+url,{
        method:method,
        data:dataP?dataP:null
    })
    .then(async res=>{return await res.json()})
    .then(res=>data.value=res)
    .catch(err=>error.value=err)
    return {data,error}
}

export const getBrands=()=>{
return makeHTTPRequest('/brands','GET')
}