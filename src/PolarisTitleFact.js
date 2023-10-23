import { LitElement, html, css } from 'lit';

export class PolarisTitleFact extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        
      }
      .card-wrap-outer {
        margin-top: 2rem;
        gap: 16px;
        display: flex;
        flex-wrap: wrap; 
        width: 100%;
      }

      .blue-card {
        background-color: #1e407c;
        box-shadow: 0 8px 16px 0 rgba(0,3,33,.1);
        color: #fff;
        align-items: center;
        display: grid;
        justify-content: center;
      }

      .white-card {
        background-color: #fff;
        box-shadow: 0 8px 16px 0 rgba(0,3,33,.1);
        color: #1e407c;
        align-items: center;
        display: grid;
        justify-content: center;
      }

      .blue-card-fade {
        background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);
        box-shadow: 0 8px 16px 0 rgba(0,3,33,.1);
        color: white;
        align-items: center;
        display: grid;
        justify-content: center;
      }

      @media (min-width: 768px) {
        .card-wrap-outer {
          height: 36vw;
          flex: 0 0 48%;
        }

      @media (min-width: 500px) {
        .card-wrap-outer {
          height: 44vw;
          flex: 0 0 48%;
        }
      }

      @media (min-width: 1080px) {
        .card-wrap-outer{
          height: 25vw;
          flex: 0 0 48%;
        }
      }
    `;
  }

  constructor() {
    super();
    this.blueTitle = 'Power Facts';
  }

  render() {
    return html`
    <div class="card-wrap-outer">
      <div class="blue-card">${this.blueTitle}</div>
      <div class="white-card">White Card</div>
      <div class="blue-card-fade">Fade</div>
    </div>`;
  }
}
