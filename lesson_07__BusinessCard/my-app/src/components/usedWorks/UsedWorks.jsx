import cl from './UsedWorks.module.css'
 
 const UsedWorks = (props) => {
     
    let worksItem = props.content.map((el)=> <div className={cl.item}>{el}</div>)
     return (
         <div>
             {worksItem}
         </div>
     )
 }

 export default UsedWorks;