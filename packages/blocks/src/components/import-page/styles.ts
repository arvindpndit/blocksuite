import { css } from 'lit';

import { tooltipStyle } from '../tooltip/tooltip.js';

export const styles = css`
  :host {
    position: absolute;
    width: 480px;
    left: calc(50% - 480px / 2);
    top: calc(50% - 270px / 2);
    font-family: var(--affine-font-family);
    font-size: var(--affine-font-base);
    line-height: var(--affine-line-height);
    padding: 12px 40px 36px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    background: var(--affine-background-primary-color);
    box-shadow: var(--affine-shadow-2);
    border-radius: 16px;
    z-index: var(--affine-z-index-popover);
  }

  :host([hidden]) {
    display: none;
  }

  header {
    cursor: move;
    user-select: none;
    font-size: var(--affine-font-h-6);
    font-weight: 600;
  }

  a {
    white-space: nowrap;
    word-break: break-word;
    color: var(--affine-link-color);
    fill: var(--affine-link-color);
    text-decoration: none;
    cursor: pointer;
  }

  header icon-button {
    margin-left: auto;
    position: relative;
    left: 24px;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
  }

  .button-container icon-button {
    padding: 8px 12px;
    justify-content: flex-start;
    gap: 12px;
    width: 190px;
    height: 40px;
    box-shadow: var(--affine-shadow-1);
    border-radius: 10px;
  }

  .footer {
    display: flex;
    align-items: center;
    color: var(--affine-text-secondary-color);
  }

  .loading-header {
    display: flex;
    align-items: center;
  }

  .has-tool-tip {
    display: flex;
    margin-left: auto;
  }

  ${tooltipStyle}
`;
