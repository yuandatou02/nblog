/**
 * 封装element-plus的通知提示方法
 */
export function myElNoteMessage(title: string, message: string, type: string = 'success') {
    ElNotification({
        title,
        message,
        type,
    });
}

/**
 * 封装element-plus的弹窗方法
 * @param message 弹窗信息
 * @param type 弹窗类型
 */
export function myElMessageBox(message: string, type: string = 'info') {
    return ElMessageBox.confirm(message, '系统通知', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type,
    });
}
