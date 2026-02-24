import { Component, signal } from '@angular/core';
import { ClassroomCard } from "../shared/classroom-card/classroom-card";
import { Classroom } from '../shared/types';
import { DatabaseIcon, GlobeIcon, Package2Icon, PackageIcon } from 'lucide-angular';

@Component({
  selector: 'app-lectures',
  imports: [ClassroomCard],
  templateUrl: './lectures.html',
  styleUrl: './lectures.css',
})
export class Lectures {

  classrooms = signal<Classroom[]>([
    {
      id: 'clr1',
      moduleName: 'Banco de Dados I',
      moduleId: 'm-02',
      academicPeriod: '2026.1',
      color: 'pastel-lavender',
      icon: DatabaseIcon
    },
    {
      id: 'clr2',
      moduleName: 'Programação Orientada a Objetos',
      moduleId: 'm-01',
      academicPeriod: '2025.2',
      color: 'pastel-red',
      icon: PackageIcon
    },
    {
      id: 'clr3',
      moduleName: 'Web I',
      moduleId: 'm-06',
      academicPeriod: '2026.1',
      color: 'pastel-green',
      icon: GlobeIcon
    }
  ])

}
