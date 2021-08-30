Vue.component('w-ckeditor-vue', window['w-ckeditor-vue'])
var Main = {
    data() {
        return {
            tableData: [],
            tableBinData: [
                {
                    image: 'http://localhost:3000/images/product/goi-y-9-cach-phoi-do-nu-dep-style-cuc-chat8.jpg',
                    code: 'BDD-111',
                    name: 'Quần xấu quắc',
                    quanlity: 5,
                    quantitysold: 5,
                    price: '20.000 vnđ',
                    datecreate: '28/08/2021',
                    usercreate: 'tanhuynh',
                    dateupdate: '28/08/2021',
                    userupdate: 'tanhuynh'
                }
            ],
            tableFollowData: [
                {
                    image: 'http://localhost:3000/images/product/goi-y-9-cach-phoi-do-nu-dep-style-cuc-chat8.jpg',
                    code: 'BDD-111',
                    name: 'Quần xấu quắc theo dõi',
                    quanlity: 5,
                    quantitysold: 5,
                    price: '20.000 vnđ',
                    datecreate: '28/08/2021',
                    usercreate: 'tanhuynh',
                    dateupdate: '28/08/2021',
                    userupdate: 'tanhuynh'
                }
            ],
            tableNoteData: [
                {
                    image: 'http://localhost:3000/images/product/goi-y-9-cach-phoi-do-nu-dep-style-cuc-chat8.jpg',
                    code: 'BDD-111',
                    name: 'Quần xấu quắc chú ý',
                    quanlity: 5,
                    quantitysold: 5,
                    price: '20.000 vnđ',
                    datecreate: '28/08/2021',
                    usercreate: 'tanhuynh',
                    dateupdate: '28/08/2021',
                    userupdate: 'tanhuynh'
                },
                {
                    image: 'http://localhost:3000/images/product/goi-y-9-cach-phoi-do-nu-dep-style-cuc-chat8.jpg',
                    code: 'BDD-111',
                    name: 'Quần xấu quắc chú ý',
                    quanlity: 5,
                    quantitysold: 5,
                    price: '20.000 vnđ',
                    datecreate: '28/08/2021',
                    usercreate: 'tanhuynh',
                    dateupdate: '28/08/2021',
                    userupdate: 'tanhuynh'
                },
            ],
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
                return this.countFollow = this.tableFollowData.length;
            }
            else if(tab.name == 'note')
            {
                return this.countNote = this.tableNoteData.length;
            }
            else if(tab.name == 'bin')
            {
                return this.countBin = this.tableBinData.length;
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
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')