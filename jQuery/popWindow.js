/**
 * Created by lailai on 2017/3/4.
 */
//��װ��layer������js����
function popWindow(title,width,height,url){
    alert(url);
    var index = layer.open({
        type: 2,
        title: title,//����
        shadeClose: true,//��ʾ�رհ�ť
        shade: 0.5,//���õײ��͸����
        maxmin: false, //���������С����ť
        area: [width, height],//��ʾ������Ĵ�С
        content: url //iframe��ʾ���ݵ�url��no������ʾ������
    });
    //layer.full(index);//��������ȫ����ʾ
}