import * as React from 'react';
import styles from './ChandReactWp.module.scss';
import { IChandReactWpProps } from './IChandReactWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jquery from 'jquery';


export interface IEmployeeWpState{    
  items:[    
        {    
          "EmployeeName": "",    
          "EmployeeId": "",    
          "Experience":"",    
          "Location":""  
        }];    
}  

export default class ChandReactWp extends React.Component<IChandReactWpProps, IEmployeeWpState> {
  public constructor(props: IChandReactWpProps, state: IEmployeeWpState){    
    super(props);    
    this.state = {    
      items: [    
        {    
          "EmployeeName": "",    
          "EmployeeId": "",    
          "Experience":"",    
          "Location":""  
        }    
      ]    
    };    
  }    
    
  public componentDidMount(){  
    var reactHandler = this;  
    jquery.ajax({  
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('EmployeeList')/items`,  
        type: "GET",  
        headers:{'Accept': 'application/json; odata=verbose;'},  
        success: (resultData) => {  
          reactHandler.setState({  
            items: resultData.d.results  
          });  
        },  
        error : (jqXHR, textStatus, errorThrown) => {  
        }  
    });  
  }    
    
 
  public render(): React.ReactElement<IChandReactWpProps> {
    return (  

       <div className={styles.panelStyle} > 
         <br></br>
  
         <br></br> 
         <div className={styles.tableCaptionStyle} >Resource Dashboard of CHANDRIMA PVT LTD.</div>
         <br></br>
          <div className={styles.headerCaptionStyle} >Employee Details</div>
         <div className={styles.tableStyle} >   
           
           <div className={styles.headerStyle} >  
             <div className={styles.CellStyle}>Employee Name</div>  
             <div className={styles.CellStyle}>Employee Id</div>  
             <div className={styles.CellStyle}>Experience</div>  
               <div className={styles.CellStyle}>Location</div>                     
           </div>  
           
             {this.state.items.map((item,key) => {  
               
               return (<div className={styles.rowStyle} key={key}>  
                   <div className={styles.CellStyle}>{item.EmployeeName}</div>  
                   <div className={styles.CellStyle}>{item.EmployeeId}</div>  
                    <div className={styles.CellStyle}>{item.Experience}</div>
                     <div className={styles.CellStyle}>{item.Location}</div>
         
                 </div>);  
             })} <br></br>                     
         </div>  
       </div>  
   );  
 }   
}  



