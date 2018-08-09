// import * as svgjs from 'svg.js';
// import 'svg.filter.js';

// import 'material-shapes-svg';

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: inline-block;
            position: relative;
            background-color: transparent;
            box-sizing: border-box;
            border: none;
            outline: none;
            -moz-user-select: none;
            -o-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-appearance: none;
            text-decoration: none;
            text-decoration-line: none;
            text-decoration-style: solid;
            padding: 0;
        }

        :host([hidden]) {
            display: none;
        }

        :host::-moz-focus-inner {
            padding: 0;
            border: 0;
        }

        // postcss-bem-linter: ignore
        :host:active {
            outline: none;
        }

        :host:hover {
            cursor: pointer;
        }

        :host:disabled {
            cursor: default;
            pointer-events: none;
        }

        #mds-content {
            position: relative;
        }

        #mds-svg {
            overflow: visible;
        }
        #mds-background,
        #mds-wash,
        #mds-ripple {
            position: absolute;
            overflow: visible;
            top: 0;
            left: 0;
        }
    </style>
    <div class="mds-background"
        id="mds-background"></div>
    <div class="mds-wash"
        id="mds-wash"></div>
    <div class="mds-content"
        id="mds-button-content">
        <slot></slot>
    </div>
    <div class="mds-ripple"
        id="mds-ripple"></div>
`;

export class MaterialSvgButton extends HTMLButtonElement {
    private backgroundElement: HTMLElement;
    private washElement: HTMLElement;
    private contentElement: HTMLElement;
    private rippleElement: HTMLElement;

    // private backgroundSvg: svgjs.Doc;
    // private washSvg: svgjs.Doc;
    // private rippleSvg: svgjs.Doc;

    // private ripple: svgjs.MDSRipple;
    // private elevation: svgjs.Filter;

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.backgroundElement = this.shadowRoot.querySelector('#mds-background');
        this.washElement = this.shadowRoot.querySelector('#mds-wash');
        this.contentElement = this.shadowRoot.querySelector('#mds-content');
        this.rippleElement = this.shadowRoot.querySelector('#mds-ripple');
    }
}

customElements.define('material-svg-button', MaterialSvgButton, {extends: 'button'});