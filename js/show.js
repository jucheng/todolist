new Vue({

    el: '#box',
    data: {
        myData: [],
        username: "",
        start_time: "",
        end_time: "",
        nowIndex: -100
    },
    methods: {
        addItem: function() {
            // 添加数据用数组的添加方法push();
            this.myData.push({
                name: this.username,
                start_time: this.start_time,
                end_time: this.end_time,
                event_content:this.event_content
            });
            // 添加完之后清空输入框
            this.username = "",
                this.start_time = "",
                this.end_time = "",
                this.event_content=""

        },
        deleteMsg: function(nowIndex) {
            if (nowIndex == -2) {

                this.myData = [];
            } else {

                // splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
                this.myData.splice(nowIndex, 1)
            }

        }

    }

})
 $(function () {
                $('#datetimepicker1').datetimepicker({
                    
                });
            });
  $(function () {
                $('#datetimepicker2').datetimepicker();
            });