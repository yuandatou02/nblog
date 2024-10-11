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

