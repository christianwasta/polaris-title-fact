import { LitElement, html, css } from 'lit';


export class PolarisTitleFact extends LitElement {
  static get properties() {
    return {
      color: { type: String },
      title: { type: String },
      link: { type: String },
      image: { type: String },
      subtext: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        font-family: "Roboto", "Franklin Gothic Medium";
        --navy-blue: #001836;
        --blue: #1e407c;
        --fade: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);
      }

      .card-title {
        font-weight: bold;
        width: 75%;
        max-height: 100%;
        overflow: hidden;
      }

      .subtext {
        font-size: 16px;
        overflow: hidden; 
      }
    
      .card {
        background-color: #fff;
        color: #fff;
        box-shadow: 0 8px 16px 0 rgba(0,3,33,.1);
        align-items: center;
        display: flex;
        justify-content: center;
        background-image: url(var(--card-background-image));
        position: relative;
      }

      .link {
        font-weight: bold;
        color: #fff;
        text-decoration: none;
      }

      .svg-link {
        fill: none;
        bottom: 16px;
        right: 16px;
        position: absolute;
        transition: all .25s ease-in-out;
        transform-origin: bottom right;
      }

      .link:hover .svg-link {
        transform: scale(1.3333);
        transition: all .25s ease-in-out;
        transform-origin: bottom right;
      }

      .card[card-color="blue"] {
        background-color: var(--blue);
      }

      .card[card-color="fade"] {
        background: var(--fade);
      }

      .card[card-color="navy"] {
        background-color: var(--navy-blue);
      }

      .card[card-color="white"] {
        background-color: #fff;
        color: var(--navy-blue);
      }
      
      .white-hr {
        height: 4px;
        border: none;
        border-radius: 4px;
        background-color: var(--blue);
      }

      .white-text-wrapper {
        max-height: 100%;
        max-width: 100%;
        width: 75%;
        overflow: hidden;
      }

      
      @media (max-width: 1080px) {
        .card {
          height: 36vw;
          flex: 0 0 48%;
        }
        .card-title {
          font-size: 32px;
        }
      }

      @media (max-width: 768px) {
        .card {
          height: 45vw;
        }
        .card-title {
          font-size: 24px;
        }
      }

      @media (min-width: 1080px) {
        .card {
          height: 24vw;
          flex: 0 0 32%;
        }
        .card-title {
          font-size: 40px;
        }
      }
    `;
  }

  constructor() {
    super();
    this.color = "";
    this.title = "Enter title";
    this.link = null;
    this.image = "";
  }

  render() {
    const hasLink = this.hasAttribute('link');
    const svgLink = new URL('../assets/image.svg', import.meta.url).href;
    const hasSubText = this.hasAttribute('subtext');

    return html`
      <div class="card-wrap-outer">
        <div class="card" card-title="${this.title}" card-color="${this.color}"
        style=" ${hasLink ? `background-image: linear-gradient(to right, rgba(0, 3, 33, 0.5), rgba(0, 3, 33, 0.5)), url(${this.image})` : ''}">
        ${hasLink ? html` 
          <div class="card-title">${this.title}</div>   
          <a class="link" href="${this.link}">
            <img class="svg-link" src="${svgLink}#svgView(viewBox(0,0,24,24))" />
          </a>` : hasSubText ? html`
            <div class="white-text-wrapper">
              <div class="card-title">${this.title}</div>
              <hr class="white-hr">
              <div class="subtext">${this.subtext}</div>
            </div>
          ` : html`<div class="card-title">${this.title}</div>`}
          </div>
      </div>
    `;
  }
}
