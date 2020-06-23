import React from 'react';

export default class EmpTableData extends React.Component {
   constructor(props) {
      super()
   }
   renderTableData() {
      const arr = []
      this.props.setEmpData.map((data, index) => {

         const { name, empId, dept, emailId, doj } = data
         arr.push(
            <tr key={empId}>
               <td>{name}</td>
               <td>{empId}</td>
               <td>{dept}</td>
               <td>{emailId}</td>
               <td>{doj}</td>
               <td onClick={() => this.clear(index)} className="clear">Clear</td>
            </tr>
         )
      })
      return arr;
   }

   clear = (index) => {
      this.props.onClear(index)
   }

   render() {
      return (
         <div style={{ textAlign: "-webkit-center" }}>
            <table id="EployeeTable">
               <tr>
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Department</th>
                  <th>Email Id</th>
                  <th>Date of Joining</th>
                  <th>Action</th>
               </tr>
               {this.renderTableData()}
            </table>
         </div>
      )
   }
}
