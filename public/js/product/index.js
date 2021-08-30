Vue.component('w-ckeditor-vue', window['w-ckeditor-vue'])
var Main = {
    data() {
        return {
            tableData: [],
            tableBinData: [],
            tableFollowData: [],
            tableNoteData: [],
            optionsAction: [
                {
                    value: 'follow',
                    label: 'Theo dõi'
                },
                {
                    value: 'note',
                    label: 'Chú ý'
                },
                {
                    value: 'bin',
                    label: 'Xoá vào thùng rác'
                },
                {
                    value: 'restore',
                    label: 'Khôi phục'
                },
                {
                    value: 'delete',
                    label: 'Xoá vĩnh viễn'
                }
            ],
            valueSorf: [
                {
                    value: 'new',
                    label: 'Sắp xếp mới nhất'
                },
                {
                    value: 'new',
                    label: 'Sắp xếp cũ nhất'
                },
                {
                    value: 'new',
                    label: 'Sắp xếp chữ cái'
                },
                {
                    value: 'new',
                    label: 'Sắp xếp số tiền'
                },
                {
                    value: 'new',
                    label: 'Sắp xếp số lượng'
                }
            ],
            activeName: 'index',
            loading: true,
            searchIndex: '',
            value: 'Hành động'
        }
    },
    mounted() {
        this.loadIndexProduct();
        this.loadBinProduct();
        this.loadFollowProduct();
        this.loadNoteProduct();
    },
    methods: {
        handleClick(tab, event) {
            this.loading = true;
            if(tab.name == 'index')
            {
                this.loadIndexProduct();
            }
            else if(tab.name == 'follow')
            {
                this.loadFollowProduct();
            }
            else if(tab.name == 'note')
            {
                this.loadNoteProduct();
            }
            else if(tab.name == 'bin')
            {
                this.loadBinProduct();
            }
            return false;
        },
        loadIndexProduct() {
            let that = this;
            that.tableData = [];
            $.ajax({
                url: '/json-product',
                type: "GET",
                dataType: 'json',
                async: true,
                contentType: 'application/json; charset=UTF-8',
                success: function (rs) {
                    if (rs.success) {
                        var data = JSON.parse(JSON.stringify(rs.data))
                        data.forEach((item, index) => {
                            that.tableData.push(item);
                        })
                        that.loading = false;
                        that.countIndex = data.length;
                    }
                    if (rs.error) {
                        alert(rs.message);
                    }
                },
                error: function (xhr, status, err) { }
            });
        },
        loadBinProduct() {
            let that = this;
            that.tableBinData = [];
            $.ajax({
                url: '/json-bin-product',
                type: "GET",
                dataType: 'json',
                async: true,
                contentType: 'application/json; charset=UTF-8',
                success: function (rs) {
                    if (rs.success) {
                        var data = JSON.parse(JSON.stringify(rs.data))
                        data.forEach((item, index) => {
                            that.tableBinData.push(item);
                        })
                        that.loading = false;
                        that.countBin = data.length;
                    }
                    if (rs.error) {
                        alert(rs.message);
                    }
                },
                error: function (xhr, status, err) { }
            });
        },
        loadFollowProduct() {
            let that = this;
            that.tableFollowData = [];
            $.ajax({
                url: '/json-follow-product',
                type: "GET",
                dataType: 'json',
                async: true,
                contentType: 'application/json; charset=UTF-8',
                success: function (rs) {
                    if (rs.success) {
                        var data = JSON.parse(JSON.stringify(rs.data))
                        data.forEach((item, index) => {
                            that.tableFollowData.push(item);
                        })
                        that.loading = false;
                        that.countFollow = data.length;
                    }
                    if (rs.error) {
                        alert(rs.message);
                    }
                },
                error: function (xhr, status, err) { }
            });
        },
        loadNoteProduct() {
            let that = this;
            that.tableNoteData = [];
            $.ajax({
                url: '/json-note-product',
                type: "GET",
                dataType: 'json',
                async: true,
                contentType: 'application/json; charset=UTF-8',
                success: function (rs) {
                    if (rs.success) {
                        var data = JSON.parse(JSON.stringify(rs.data))
                        data.forEach((item, index) => {
                            that.tableNoteData.push(item);
                        })
                        that.loading = false;
                        that.countNote = data.length;
                    }
                    if (rs.error) {
                        alert(rs.message);
                    }
                },
                error: function (xhr, status, err) { }
            });
        },
        binProduct(id, name, bin)
        {
            let that = this;
            if(!bin)
            {
                this.$confirm('Bạn có chắc muốn xoá sản phẩm "'+name+'?', 'Xoá sản phẩm', {
                    confirmButtonText: 'Xoá vào thùng rác',
                    cancelButtonText: 'Đóng',
                    type: 'warning'
                  }).then(() => {
                    $.ajax({
                        url: '/product/'+id+'/bin',
                        type: "GET",
                        dataType: 'json',
                        async: true,
                        contentType: 'application/json; charset=UTF-8',
                        success: function (rs) {
                            if(rs.success)
                            {
                                that.loadIndexProduct();
                                that.loadBinProduct();
                                that.loadNoteProduct();
                                that.loadFollowProduct();
                                that.$message({
                                    type: 'success',
                                    message: 'Xoá ['+name+'] thành công!'
                                });
                            }
                            else{
                                that.$message({
                                    type: 'success',
                                    message: 'Xoá thất bại'
                                });
                            }
                        },
                        error: function (xhr, status, err) { }
                    });
                  }).catch(() => {
                    that.$message({
                      type: 'info',
                      message: 'Đã huỷ xoá sản phẩm [ ' + name + ' ]'
                    });          
                  });
            }
            else{
                this.$confirm('Bạn có chắc muốn khôi phục sản phẩm"'+name+'?', 'Khôi phục', {
                    confirmButtonText: 'Khôi phục',
                    cancelButtonText: 'Đóng',
                    type: 'warning'
                  }).then(() => {
                    $.ajax({
                        url: '/product/'+id+'/bin',
                        type: "GET",
                        dataType: 'json',
                        async: true,
                        contentType: 'application/json; charset=UTF-8',
                        success: function (rs) {
                            if(rs.success)
                            {
                                that.loadIndexProduct();
                                that.loadBinProduct();
                                that.loadNoteProduct();
                                that.loadFollowProduct();
                                that.$message({
                                    type: 'success',
                                    message: 'Khôi phục ['+name+'] thành công'
                                });
                            }
                            else{
                                that.$message({
                                    type: 'success',
                                    message: 'Xoá thất bại'
                                });
                            }
                        },
                        error: function (xhr, status, err) { }
                    });
                  }).catch(() => {
                    that.$message({
                      type: 'info',
                      message: 'Đã huỷ khôi phục sản phẩm [ ' + name + ' ]'
                    });          
                  });
            }
        }
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')