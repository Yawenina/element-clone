import service from './src/index';

export default {
  name: 'loading',
  service,
}

// interface IloadingOptions {
//   target?: HTMLElement | string;
//   body?: boolean;
//   fullscreen?: boolean;
//   lock?: boolean;
//   text?: string;
//   spinner?: string;
//   background?: string;
//   customClass?: string;
// }
// function renderHTML(options) {
//   const { target } = options;
//
//   const div = document.createElement('div');
//   div.innerHTML = `
//     <div class="el-loading-mask is-fullscreen">
//       <div class="el-loading-spinner">
//         <i class="el-icon-loading"></i>
//         <p class="el-loading-text">Loading</p>
//       </div>
//     </div>
//   `;
//
//   target.classList.add('el-loading-parent--relative');
//   return target.appendChild(div);
// }
//
// const Loading = {
//   name: 'Loading',
//   service(options) {
//     //  单例模式
//     if (Loading.instance) return Loading.instance;
//
//     const target = document.body;
//
//     Loading.instance = {
//       dom: renderHTML({ target }),
//       close() {
//         const singleton = Loading.instance;
//         if (!singleton) return;
//
//         // 移除，清空instance;
//         singleton.dom.parentElement.removeChild(singleton.dom);
//         Loading.instance = null;
//       }
//     };
//     return Loading.instance;
//   }
// };

// export default function Loading() {
//   return {
//
//   }
// }


// export default Loading;