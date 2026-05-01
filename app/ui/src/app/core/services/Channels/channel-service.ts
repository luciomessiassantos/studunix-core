import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  
  getAllAssignedChannels(enrollmentId: string) { }

  getChannelData(channelId: string) { }

  getAllAssignments() { }

  getAllMaterial() { }

  getAllWarnings() { }

  getLatestUpdates(enrollmentId: string) { }
  
}
