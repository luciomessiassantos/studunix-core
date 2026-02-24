import { Injectable } from '@angular/core';
import { BaseApiService } from '../BaseApiService/base-api-service';
import { StudentDetailsDto, UserDetailsDto } from '~/core/types';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService extends BaseApiService {
 

  isStudent(user: UserDetailsDto | StudentDetailsDto): user is StudentDetailsDto {
    return 'registry' in user;
  }

  getUserDetails(id: string, type: 'STUDENT' | 'PROFESSOR') {
    return this.client.get<UserDetailsDto | StudentDetailsDto>(`${this.baseUrl}/${type == 'STUDENT' ? 'student-details' : 'professor-details'}/${id}`)
  }

}
