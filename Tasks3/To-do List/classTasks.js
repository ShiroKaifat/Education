 export class fetchTasks {

     fetchGetTasks = async () => {
         try {
             const resp = await fetch('http://localhost:8000/allTasks', {
                 method: 'GET'
             });
             return resp.json();
         }catch (e) { console.log(e); }
     }

     fetchPostTasks = async (valueInput) => {
         try {
             const response = await fetch('http://localhost:8000/createTask', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json;charset=utf-8',
                     'Access-Control-Allow-Origin': '*'
                 },
                 body: JSON.stringify({
                     text: valueInput,
                     isCheck: false
                 })
             });
             return response.json();
         }catch (e) { console.log(e); }
     }

     fetchPatchTask = async (allTas) => {
         try {
             await fetch('http://localhost:8000/updateTask', {
                 method: 'PATCH',
                 headers: {
                     'Content-Type': 'application/json;charset=utf-8',
                     'Access-Control-Allow-Origin': '*'
                 },
                 body: JSON.stringify({
                     _id: allTas._id,
                     text: allTas.text,
                     isCheck: false
                 })
             });
         } catch (e) { console.log(e); }
     }

     fetchDeleteTask = async (taskId) => {
         try {
             const response = await fetch(`http://localhost:8000/deleteTask?_id=${taskId}`, {
                 method: 'DELETE'
             });
             return response;
         } catch (e) { console.log(e); }
     }

     fetchDeleteAllTask = async () => {
         try {
             const response = await fetch(`http://localhost:8000/deleteAllTask`, {
                 method: 'DELETE'
             });
             return response;
         } catch (e) { console.log(e); }
     }
}
