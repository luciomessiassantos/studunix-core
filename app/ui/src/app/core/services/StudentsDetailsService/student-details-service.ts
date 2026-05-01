import { Injectable } from '@angular/core';
import { BaseApiService } from '../BaseApiService/base-api-service';
import { StudentProfessor } from '~/features/desktop/professor/shared/types';

@Injectable({
  providedIn: 'root',
})
export class StudentDetailsService extends BaseApiService{
  
  getStudents() {
    return this.client.get<StudentProfessor[]>(
      `${this.baseUrl}/students`
    );
  }

}
