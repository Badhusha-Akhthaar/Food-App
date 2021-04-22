import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {
  currentTimestamp : Date;
  importDate : Date;
  exportDate: any;
  months = ['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec'];
  transform(value: any) {
    this.currentTimestamp = new Date();
    this.importDate = new Date(value);
    if(this.importDate.getFullYear < this.currentTimestamp.getFullYear){
      //if the post doesn't belong to current year
      this.exportDate = this.importDate.getDate()
                        +' '+this.months[this.importDate.getMonth()]
                        +' '+this.importDate.getFullYear();
    }else{
      //if the post belongs to current year
      if(this.importDate.getMonth() < this.currentTimestamp.getMonth()){
        //if the post doesn't belong to current month
        this.exportDate = this.importDate.getDate()
                          +' '+this.months[this.importDate.getMonth()]
                          +','+this.importDate.getHours()+':'
                          +this.importDate.getMinutes();

      }else{
        if(this.importDate.getDate() === this.currentTimestamp.getDate()){
          this.exportDate = 'Today '+this.importDate.getHours()+':'+this.importDate.getMinutes();
        }
        else if(this.currentTimestamp.getDate() - this.importDate.getDate() === 1){
          this.exportDate = 'Yesterday '+this.importDate.getHours()+':'+this.importDate.getMinutes();
        }
        else{
          this.exportDate = this.importDate.getDate()
          +' '+this.months[this.importDate.getMonth()]
          +','+this.importDate.getHours()+':'
          +this.importDate.getMinutes();
        }
      }

    }
    
    return this.exportDate;
  } 

}
