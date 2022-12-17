export function formatDate(date:any){
    return new Date(date).toLocaleString('en-us',{month:'long',day: 'numeric' , year:'numeric'})
  }