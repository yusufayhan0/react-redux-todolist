import React, { useState } from "react";
import { connect } from "react-redux"
import '../style.css';
import {todoEkle,todoTamamla,todoTemizle} from "../redux/actions/todoActions"




function App(props) {

  const [text, setText] = useState("");
  
  

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        
          <input placeholer="listeye ekle" value={text} onChange={(e)=>setText(e.target.value)} />
          <button onClick={()=>{
            props.todoEkle(text)
            setText("")
          }}>Ekle</button>
      </div>
      <div className="liste">
        {props.liste.map(item => (
          <div key={item.id} onClick={()=>{
            props.todoTamamla(item.id)
            }} className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
        ))}
      </div>
      <button onClick={()=>props.todoTemizle()} className="temizle">Tamamlananları Temizle</button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    liste: state.liste
  }
}

export default connect(mapStateToProps,{todoEkle,todoTamamla,todoTemizle})(App);
