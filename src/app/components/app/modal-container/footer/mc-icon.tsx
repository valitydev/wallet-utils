import * as React from 'react';
import { StylizedSvgIcon } from './stylized-svg-icon';

export const McIcon: React.SFC<StylizedSvgIcon> = (props) => (
    <svg className={props.className} width='63' height='22'>
        <g fill='#FFF' fillRule='evenodd' className={props.fillStyle}>
            <path d='M5.77 14.16a2.71 2.71 0 0 0-1.54-.45c-.75 0-1.35.15-1.35.93 0 1.39 2.72.87 2.72 3.83 0 2.7-1.8 3.4-3.43 3.4-.72 0-1.55-.24-2.17-.51l.44-1.98a2.9 2.9 0 0 0 1.73.56c.59 0 1.5-.16 1.5-1.16 0-1.57-2.73-.98-2.73-3.73 0-2.52 1.6-3.27 3.13-3.27.87 0 1.68.13 2.16.44l-.46 1.94M11.25 21.53c-.63.21-1.24.32-1.9.32-2.06 0-3.14-1.2-3.14-3.49 0-2.67 1.37-4.64 3.23-4.64 1.53 0 2.5 1.1 2.5 2.83 0 .58-.06 1.13-.22 1.92h-3.7v.25c0 .9.55 1.36 1.62 1.36.66 0 1.26-.15 1.92-.5l-.31 1.95zm-1.03-4.63v-.4c0-.63-.32-1-.87-1-.59 0-1 .5-1.18 1.4h2.05zM16.67 21.53c-.38.18-.9.3-1.64.3-1.62 0-2.63-1.6-2.63-3.53 0-2.53 1.46-4.55 3.6-4.55.46 0 1.17.2 1.73.52l-.41 1.85a2.3 2.3 0 0 0-1.24-.41c-.99 0-1.7.89-1.7 2.48 0 .92.52 1.68 1.33 1.68.48 0 .82-.1 1.24-.34l-.28 2M23.59 19.58c-.1.67-.18 1.32-.23 2.02h-1.79l.15-1.26h-.01c-.56.85-1.14 1.44-2.15 1.44-1.12 0-1.72-1.16-1.72-2.67 0-.52.03-.82.15-1.63l.5-3.6h1.99l-.54 3.61c-.05.39-.13.77-.13 1.17 0 .46.21.92.75.9.81 0 1.3-.99 1.43-2.13l.55-3.55h1.91l-.86 5.7M28.6 13.8a.73.73 0 0 0-.19-.02c-.6 0-.95.34-1.51 1.27l.16-1.18h-1.68l-1.13 7.78h1.85c.67-4.76.85-5.58 1.73-5.58h.14c.16-.93.39-1.62.7-2.25l-.07-.02M33.26 21.53c-.63.21-1.24.32-1.9.32-2.06 0-3.14-1.2-3.14-3.49 0-2.67 1.37-4.64 3.23-4.64 1.53 0 2.5 1.1 2.5 2.83 0 .58-.06 1.13-.23 1.92h-3.68l-.02.25c0 .9.55 1.36 1.63 1.36.66 0 1.26-.15 1.92-.5l-.3 1.95zm-1.04-4.63c.02-.16.02-.3.02-.4 0-.63-.33-1-.87-1-.6 0-1.01.5-1.19 1.4h2.04zM40.86 12.38l-.3 2.07a3.29 3.29 0 0 0-1.66-.52c-1.39 0-2.35 1.49-2.35 3.59 0 1.45.64 2.33 1.72 2.33.46 0 .97-.15 1.58-.5l-.32 2.2c-.69.2-1.14.27-1.64.27-2 0-3.24-1.59-3.24-4.13 0-3.42 1.71-5.81 4.17-5.81.32 0 .6.04.83.1l.76.21.45.19M44.62 17.2c0 1.77-.56 2.81-1.43 2.81-.64.02-1.03-.68-1.03-1.73 0-1.24.57-2.64 1.48-2.64.73 0 .98.76.98 1.57zm1.95.04c0-1.96-.99-3.48-2.84-3.48-2.13 0-3.5 1.85-3.5 4.58 0 1.96.8 3.56 2.82 3.56 2.04 0 3.52-1.42 3.52-4.66zM52.77 21.56h-1.74l.09-.76c-.51.6-1.04.87-1.72.87-1.35 0-2.24-1.29-2.24-3.23 0-2.59 1.39-4.78 3.02-4.78.72 0 1.27.34 1.77 1.07l.41-2.73h1.82l-1.4 9.56zm-2.73-1.83c.87 0 1.47-1.08 1.47-2.62 0-.99-.34-1.52-.98-1.52-.84 0-1.44 1.08-1.44 2.62 0 1 .32 1.52.95 1.52zM59.09 21.53c-.64.21-1.25.32-1.9.32-2.07 0-3.15-1.2-3.15-3.49 0-2.67 1.38-4.64 3.24-4.64 1.52 0 2.5 1.1 2.5 2.83 0 .58-.07 1.13-.23 1.92h-3.69l-.01.25c0 .9.55 1.36 1.62 1.36.67 0 1.26-.15 1.93-.5l-.31 1.95zm-1.04-4.63l.01-.4c0-.63-.32-1-.87-1-.6 0-1.01.5-1.18 1.4h2.04zM60.94 21.5h-.3v-1.29h-.44v-.27h1.17v.27h-.43v1.3zm1.98 0h-.28v-1.3l-.27 1.3h-.3l-.25-1.3v1.3h-.29v-1.56h.44l.26 1.23.26-1.23h.43v1.56zM8.33 9.87H6.35L7.5 2.52 4.95 9.87H3.6l-.17-7.31-1.2 7.3H.39L1.93.3h2.85l.08 5.92L6.8.3h3.08L8.33 9.87M13.44 6.4l-.45-.03c-1.12 0-1.69.4-1.69 1.19 0 .48.28.79.71.79.8 0 1.4-.8 1.43-1.95zm1.44 3.47h-1.64l.03-.81c-.5.64-1.17.94-2.08.94-1.07 0-1.8-.86-1.8-2.12 0-1.9 1.28-3 3.47-3 .23 0 .52.02.81.06.06-.26.08-.37.08-.5 0-.52-.35-.71-1.27-.71-.56 0-1.2.08-1.65.22l-.28.08-.17.05.27-1.75c1-.3 1.64-.42 2.38-.42 1.7 0 2.6.8 2.6 2.28 0 .4-.03.68-.16 1.55l-.42 2.75L15 9l-.05.4-.04.27-.02.2zM16.29 4.55c0 .98.46 1.66 1.5 2.17.8.39.93.5.93.85 0 .49-.36.71-1.14.71-.59 0-1.14-.1-1.77-.31l-.27 1.8.09.01.36.08c.12.02.29.05.52.07.47.04.83.06 1.09.06 2.08 0 3.04-.82 3.04-2.6 0-1.06-.4-1.69-1.4-2.16-.82-.39-.91-.48-.91-.84 0-.42.32-.64.96-.64.39 0 .92.05 1.42.12l.28-1.8c-.52-.08-1.28-.15-1.74-.15-2.2 0-2.97 1.2-2.96 2.63M24.1 9.77a4.4 4.4 0 0 1-1.42.26c-1.01 0-1.56-.6-1.56-1.71 0-.22.01-.45.05-.7l.13-.76.09-.62.86-5.3h1.97l-.23 1.15H25l-.27 1.89H23.7l-.52 3.25-.03.32c0 .4.2.57.67.57.23 0 .4-.02.54-.07l-.27 1.72M30.38 9.7c-.68.21-1.33.32-2.04.32-2.2 0-3.36-1.2-3.36-3.49 0-2.67 1.47-4.64 3.46-4.64 1.63 0 2.68 1.1 2.68 2.83 0 .58-.07 1.14-.25 1.92h-3.94l-.02.24c0 .91.6 1.37 1.74 1.37.71 0 1.35-.15 2.06-.5l-.33 1.95zm-1.11-4.63l.01-.4c0-.63-.35-1-.94-1-.63 0-1.08.5-1.26 1.4h2.19zM35.97 2.02a1.1 1.1 0 0 0-.2-.01c-.66 0-1.03.33-1.63 1.26l.17-1.18h-1.8L31.3 9.87h2c.7-4.76.88-5.58 1.84-5.58l.14.01c.18-.94.42-1.63.75-2.25l-.06-.03M42.54.6l-.32 2.08a3.67 3.67 0 0 0-1.77-.51c-1.48 0-2.52 1.47-2.52 3.57 0 1.46.7 2.33 1.85 2.33a3.7 3.7 0 0 0 1.68-.49l-.34 2.18c-.73.21-1.2.28-1.75.28-2.14 0-3.47-1.58-3.47-4.12C35.9 2.49 37.74.1 40.36.1c.34 0 .64.04.9.1l.8.22c.25.1.3.1.48.18M45.96 6.4l-.44-.03c-1.13 0-1.7.4-1.7 1.19 0 .48.28.79.71.79.81 0 1.4-.8 1.43-1.95zm1.44 3.47h-1.64l.04-.81c-.5.64-1.17.94-2.08.94-1.08 0-1.82-.86-1.82-2.12 0-1.9 1.29-3 3.49-3 .22 0 .51.02.8.06.07-.26.08-.37.08-.5 0-.52-.34-.71-1.27-.71a6 6 0 0 0-1.65.22l-.28.08-.17.05.28-1.75c.99-.3 1.64-.42 2.37-.42 1.7 0 2.6.8 2.6 2.28 0 .4-.03.68-.16 1.55l-.42 2.75-.06.5-.05.4-.04.27-.02.2zM52.94 2.02a1 1 0 0 0-.2-.01c-.65 0-1.03.33-1.64 1.26l.18-1.18h-1.8l-1.2 7.78h1.98c.71-4.76.9-5.58 1.85-5.58l.14.01c.18-.94.42-1.63.75-2.25l-.06-.03M58.33 9.87h-1.88l.1-.76c-.54.6-1.1.86-1.83.86-1.45 0-2.4-1.28-2.4-3.23 0-2.59 1.48-4.77 3.23-4.77.77 0 1.35.33 1.9 1.06L57.88.3h1.96l-1.51 9.57zM55.4 8.04c.93 0 1.58-1.08 1.58-2.62 0-1-.37-1.53-1.06-1.53-.9 0-1.53 1.08-1.53 2.61 0 1.02.34 1.54 1.01 1.54zM59.48 8.74c0-.68.53-1.22 1.18-1.22.66 0 1.19.54 1.19 1.22a1.2 1.2 0 0 1-1.19 1.22 1.2 1.2 0 0 1-1.18-1.22zm1.18.93c.5 0 .9-.42.9-.93s-.4-.93-.9-.93-.9.42-.9.93.4.93.9.93zm-.16-.4h-.24V8.2h.44c.09 0 .19 0 .27.06.08.06.13.16.13.27 0 .12-.07.23-.18.27l.19.48h-.27l-.16-.43h-.18v.43zm0-.6h.14c.05 0 .1 0 .15-.02.04-.03.06-.08.06-.13 0-.04-.03-.09-.06-.1-.04-.03-.11-.02-.16-.02h-.13v.27z'/>
        </g>
    </svg>
);
