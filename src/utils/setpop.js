//禁止弹窗打开时页面滚动条能够滑动 在body上添加了fixed定位
// 保存滚动条位置关闭的时候还原滚动位置
const ModalHelper = {
    scrollTop:0,
    afterOpen() {
        ModalHelper.scrollTop = document.scrollingElement.scrollTop;
        document.body.classList.add('modal-open');
        document.body.style.top = -ModalHelper.scrollTop + 'px';
    },
    beforeClose() {
        document.body.classList.remove('modal-open');
        // scrollTop lost after set position:fixed, restore it back.
        document.scrollingElement.scrollTop = ModalHelper.scrollTop;
    }
}

  export default ModalHelper