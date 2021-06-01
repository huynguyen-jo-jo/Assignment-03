
class Subject{
    constructor(title,mark,title2,mark2){
        this.subject = [
            {
                title: title,
                mark: mark
            },
            {
                title: title2,
                mark: mark2
            }
        ]
    }
    show(){
        console.log(this.subject)
    }
}

class Student{
    constructor(name,gender,mark,subject){
        this.name = name
        this.gender = gender
        this.mark = mark
        this.subject = subject
    }
    showInfo(){
        console.log(`${this.name}`-`${this.mark}`)
    }
}
    
    class MangerStudent{
        constructor(){
            this.list =[]
        }
        addStudent(e){
            this.list.push(e)
        }
        print(){
            console.log(this.list)
        }
        sortByASC(){
            var temp
            for(var i =0;i<this.list.length;i++){
                for(var j=0;j<this.list.length;j++){
                    if(this.list[i].mark>this.list[j].mark){
                        temp = this.list[i]
                        this.list[i]=this.list[j]
                        this.list[j]=temp
                    }
                }
            }
        }

        sortByDESC(){
            var temp
            for(var i =0;i<this.list.length;i++){
                for(var j=0;j<this.list.length;j++){
                    if(this.list[i].mark<this.list[j].mark){
                        temp = this.list[i]
                        this.list[i]=this.list[j]
                        this.list[j]=temp
                    }
                }
            }
        }

    }

    const mn = new MangerStudent()
    

    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    const $addBtn = $('.btn-add')
    const $SearchBtn = $('.btn-sch')
    const $ASC = $('.ASC')
    const $DESC = $('.DESC')
    const $reset = $('.reset-btn')
    var sub1 = 'Toan'
    var sub2 = 'Ly'
    var arr =[]
    var arr_sch =[]
   
    const app ={
        
        reset: function(){
            const  $this = this
            $reset.onclick = ()=>{
                arr_sch =[]
                arr     =[]
                $this.loadList(arr_sch)
                $this.loadList(arr)
            }
        },
        searchstudent: function(){
            const $this = this

            $SearchBtn.onclick = ()=>{

            var $name   =   $('#name-sch').value
            var $gender =   $('#gender-sch').value
            var $mark   =   $('#mark-sch').value
            var $sub1   =   $('#sub1-sch').value
            var $sub2   =   $('#sub2-sch').value
            
            var check1 = $mark.match(/[>]/) ? true : false
            var check2 = $mark.match(/[0-9]/)[0]

            var newArr = mn.list.filter((e)=>{
                if($mark == 10){
                  return e.gender == $gender && e.mark == 10
                }
                else if(check1){
                  return e.gender == $gender && e.mark >= check2
                }else{
                  return e.gender == $gender && e.mark <= check2  
                }
            })

            for (var i = 0;i<newArr.length;i++){
                arr_sch.push(
                    `
                <div class="row mt-5">
                    <div class="col-2 box-1 bd-grey">${newArr[i].name}</div>
                    <div class="col-2 box-1 bd-grey">${newArr[i].gender}</div>
                    <div class="col-2 box-1 bd-grey">${newArr[i].mark}</div>
                    <div class="col-1 box-1 bd-grey">Toan:${newArr[i].subject.subject[0].mark}</div>
                    <div class="col-1 box-1 bd-grey">Ly:${newArr[i].subject.subject[1].mark}</div>
                </div>
                    `
                )
            }
            $this.loadList(arr_sch) 
            arr_sch = []
            }  
        },

        addStudents: function(){
            const $this = this

            $addBtn.onclick = ()=>{

            var $name = $('#name').value
            var $gender = $('#gender').value
            var $mark = Number($('#mark').value)
            var $sub1 = Number($('#sub1').value)
            var $sub2 = Number($('#sub2').value)
            var stu = new Student($name,$gender,$mark,new Subject(sub1,$sub1,sub2,$sub2))
            mn.addStudent(stu)
             arr.push(
            `
            <div class="row mt-5">
                <div class="col-2 box-1 bd-grey">${$name}</div>
                <div class="col-2 box-1 bd-grey">${$gender}</div>
                <div class="col-2 box-1 bd-grey">${$mark}</div>
                <div class="col-1 box-1 bd-grey">Toan:${$sub1}</div>
                <div class="col-1 box-1 bd-grey">Ly:${$sub2}</div>
            </div>

            `)
            $this.loadList(arr) 
            }
            
        },
        sortByASC: function(){
            const $this = this

            $DESC.onclick = ()=>{
            mn.sortByASC()
            arr=[]
            
            for(var i = 0;i<mn.list.length;i++){
                arr.push(
                `
            <div class="row mt-5">
                <div class="col-2 box-1 bd-grey">${mn.list[i].name}</div>
                <div class="col-2 box-1 bd-grey">${mn.list[i].gender}</div>
                <div class="col-2 box-1 bd-grey">${mn.list[i].mark}</div>
                <div class="col-1 box-1 bd-grey">Toan:${mn.list[i].subject.subject[0].mark}</div>
                <div class="col-1 box-1 bd-grey">Ly:${mn.list[i].subject.subject[1].mark}</div>
            </div>
                `)
            }

         $this.loadList(arr) 
         
            }
        },
        sortByDESC: function(){
            const $this = this

            $ASC.onclick = ()=>{
            mn.sortByDESC()
            arr=[]
            
            for(var i = 0;i<mn.list.length;i++){
                arr.push(
                `
            <div class="row mt-5">
                <div class="col-2 box-1 bd-grey">${mn.list[i].name}</div>
                <div class="col-2 box-1 bd-grey">${mn.list[i].gender}</div>
                <div class="col-2 box-1 bd-grey">${mn.list[i].mark}</div>
                <div class="col-1 box-1 bd-grey">Toan:${mn.list[i].subject.subject[0].mark}</div>
                <div class="col-1 box-1 bd-grey">Ly:${mn.list[i].subject.subject[1].mark}</div>
            </div>
                `)
            }

         $this.loadList(arr) 
            }
        },
        loadList: function(array){
            // const $list = $('.list')
            $('.list').innerHTML = array.join('')
        },
        start: function(){
            this.addStudents()
            this.sortByASC()
            this.sortByDESC()
            this.searchstudent()
            this.reset()
        }
    }
    app.start()
  
