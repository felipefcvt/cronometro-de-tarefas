import React from "react";
import style from "./Botao.module.scss";

export class Botao extends React.Component<{
  type?: string;
  texto: string;
  onClick?: () => void;
}> {
  render() {
    return (
      <button onClick={this.props.onClick} className={style.botao}>
        {this.props.texto}
      </button>
    );
  }
}
