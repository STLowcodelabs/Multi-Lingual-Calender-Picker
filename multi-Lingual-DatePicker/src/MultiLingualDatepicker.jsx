import { Component, createElement,React,useState,Select } from "react";
// import {ru} from "date-fns/esm/locale/ru";
import{enUS,ru} from "date-fns/esm/locale"

// registerLocale("ptBR", ptBR);
// registerLocale("en", en);
// registerLocale("ru",ru);
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";


import "./ui/MultiLingualDatepicker.css";


const languageOptions=[
    {
        label:"en",value:enUS
    },{
        label:"ru",value:ru
    }
];
// const [language, setLanguage] = React.useState("ptBR");
export default class MultiLingualDatepicker extends Component {
    // const [language , setlanguage]=useState("ptBR");
    

constructor(props){
    super(props);
    this.state={
        lan:'en',
        value:'en'
    }
}
    render  (){
    //    debugger;
        const setLocale=(e)=>{
            if(e.target.value=='ru'){
                alert(e.target.value)
                this.setState({
              
                    lan:ru,
                    value:ru
                 })   
                 setValue(e.target.value)
            }
           else if(e.target.value=='en'){
                alert(e.target.value)
                this.setState({
              
                    lan:enUS,
                    value:enUS
                 })   
                 
            }
            
         
           
        }
    return  <div>
        <div>
            <label>ru</label>
            <input type="radio" value="ru" name="ru" onClick={setLocale} /> 
            <label>en</label>
            <input type="radio" value="en" namw="en" onClick={setLocale}/ >
        </div>

       < div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
      <label>
        Language
        <select value={this.state.value} onChange={setLocale}>
          {languageOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>

        <DatePicker locale={this.state.lan} 
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"/>

        

    </div> 
    
    }
}
