export const get=(url)= >{
	return fetch(url,{
		method:'get',
		credentials:'include',
		headers:{
			accept:'application/json'
		}
	}).then(res=>res.json())
};
export const post=(url,data) =>{
	return fetch(url,{
		method:'get',
		credentials:'include',
		headers:{
			'content-type':'application/json',
			 accept:'application/json'
		},
		body:JSON.stringify(data)
	}).then(res=>res.json())
}
