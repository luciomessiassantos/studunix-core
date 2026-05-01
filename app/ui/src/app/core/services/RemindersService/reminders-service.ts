import { Injectable } from '@angular/core';
import { BaseApiService } from '../BaseApiService/base-api-service';
import { AssignmentProfessor } from '~/features/desktop/professor/shared/types.dto';
import { ReminderDto } from '~/core/types';

@Injectable({
  providedIn: 'root',
})
export class RemindersService extends BaseApiService {
  
  getReminders() {
  return this.client.get<ReminderDto[]>(
    `${this.baseUrl}/reminders`
  );
}

}
