/**
 * 移动记账本首页
 * @author linjing03
 *         wangshuo16
*/

define(function () {
    var local = localStorage;
    var nodes = [];


    /*
    * 获取消费情况
    */
    function getCost() {
        var total = 0;
        var income = 0;
        var expense = 0;

        var list = JSON.parse(local.getItem('list'));
        if(list){
            for (var i = 0, len = list.length; i < len; i ++) {
                if (list[i].type === 'income') {
                    income += parseInt(list[i].number);
                }
                else if (list[i].type === 'expense') {
                    expense += parseInt(list[i].number);
                }
            }
            total = income - expense;
        }

        return {
            total: total,
            income: income,
            expense: expense
        }
    }



    /*
    * 更改页面的内容;
    */

    function changePageNumber() {
        var data = getCost();
        nodes.income.innerHTML = data.income;
        nodes.expense.innerHTML = data.expense;
        nodes.total.innerHTML = data.total;
    }

    /*
    * 读取页面的元素;
    */

    function getElements() {
        var d = document;
        nodes['income'] = d.getElementById('income');
        nodes['expense'] = d.getElementById('expense');
        nodes['total'] = d.getElementById('total');
    }

    function init() {
        getElements();
        changePageNumber();
    }

    init();

});
