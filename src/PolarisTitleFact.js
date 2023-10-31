import { LitElement, html, css } from 'lit';


export class PolarisTitleFact extends LitElement {
  static get properties() {
    return {
      blueTitle: { type: String },
      color: { type: String },
      title: { type: String },
      link: { type: String },
      cardimage: { type: String },
      subtext: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: "Roboto", "Franklin Gothic Medium";
      }

      .card-title {
        font-weight: bold;
        width: 75%;
        max-height: 100%;
        overflow: hidden;
      }

      .subtext {
        font-size: 1rem;
        overflow: hidden; 
      }
    
      .card {
        background-color: #fff;
        box-shadow: 0 8px 16px 0 rgba(0,3,33,.1);
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 16px;
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
        background-color: #1e407c;
        color: #fff;
      }

      .card[card-color="fade"] {
        background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);;
        color: #fff;
      }

      .card[card-color="navy"] {
        background-color: #001836;
        color: #fff;
      }
      .white-hr {
        height: 4px;
        border: none;
        border-radius: 4px;
        background-color: #1e407c;
      }

      .white-text-wrapper {
        max-height: 100%;
        max-width: 100%;
        width: 75%;
        overflow: hidden;
      }

      @media (min-width: 10px) {
        .card {
          height: 45vw;
        }
        .card-title {
          font-size: 1.5rem;
        }
      }

      @media (min-width: 768px) {
        .card {
          height: 36vw;
          flex: 0 0 48%;
        }
        .card-title {
          font-size: 2rem;
        }
      }

      @media (min-width: 1080px) {
        .card {
          height: 24vw;
          flex: 0 0 32%;
        }
        .card-title {
          font-size: 2.5rem;
        }
      }
    `;
  }

  constructor() {
    super();
    this.color = 'white';
    this.title = "Enter title";
    this.link = "https://www.psu.edu/";
    this.cardimage = "";
  }

  render() {
    const hasLink = this.hasAttribute('link');
    const svgLink = new URL('../assets/image.svg', import.meta.url).href;
    const hasSubText = this.hasAttribute('subtext');

    if (hasLink) {
      return html`
      <div class="card-wrap-outer">
        <a class="link" href="${this.link}">
          <div class="card" card-title="${this.title}" card-color="${this.color}" style="background-image: linear-gradient(to right, rgba(0, 3, 33, 0.5), rgba(0, 3, 33, 0.5)), url(${this.cardimage})">
            <img class="svg-link" src="${svgLink}#svgView(viewBox(0,0,24,24))" />
            <div class="card-title">${this.title}</div>
          </div>
        </a>
      </div>
      `;
    } else if (hasSubText) {
      return html`
        <div class="card-wrap-outer">
          <div class="card" card-title="${this.title}" card-color="${this.color}">
            <div class="white-text-wrapper">
              <div class="card-title">${this.title}</div>
              <hr class="white-hr">
              <div class="subtext">${this.subtext}</div>
            </div> 
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="card-wrap-outer">
          <div class="card" card-title="${this.title}" card-color="${this.color}">
            <div class="card-title">${this.title}</div>
          </div>
        </div>
      `;
    }
  }
}
