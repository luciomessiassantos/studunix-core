import { AtomIcon, AwardIcon, BadgeCheckIcon, BookCheckIcon, BookIcon, BookOpenCheckIcon, BookOpenIcon, BookTextIcon, BrainIcon, CalculatorIcon, CalendarIcon, ChartBarStackedIcon, ChartLineIcon, ClipboardCheckIcon, ClipboardIcon, ClipboardListIcon, ClockIcon, DatabaseIcon, FileBadgeIcon, FileCheckCornerIcon, FileTextIcon, FlaskConicalIcon, GlobeIcon, GraduationCapIcon, LightbulbIcon, LucideIconData, MedalIcon, MicroscopeIcon, NotebookIcon, NotebookPen, NotebookPenIcon, NotebookTextIcon, PackageIcon, PencilIcon, PencilLine, PencilLineIcon, PencilRulerIcon, PresentationIcon, RulerIcon, SchoolIcon, TimerIcon, ToolCaseIcon, UniversityIcon, WrenchIcon } from "lucide-angular";

export type IconMapper = Record<string, LucideIconData>;

export const academicIcons: IconMapper = {
  school: SchoolIcon,
  university: UniversityIcon,
  "graduation-cap": GraduationCapIcon,
  book: BookIcon,
  "book-open": BookOpenIcon,
  "book-open-check": BookOpenCheckIcon,
  "book-check": BookCheckIcon,
  "book-text": BookTextIcon,
  notebook: NotebookIcon,
  "notebook-pen": NotebookPenIcon,
  "notebook-text": NotebookTextIcon,
  pencil: PencilIcon,
  "pencil-line": PencilLineIcon,
  "pencil-ruler": PencilRulerIcon,
  ruler: RulerIcon,
  calculator: CalculatorIcon,
  atom: AtomIcon,
  "flask-conical": FlaskConicalIcon,
  microscope: MicroscopeIcon,
  brain: BrainIcon,
  lightbulb: LightbulbIcon,
  award: AwardIcon,
  medal: MedalIcon,
  badge_check: BadgeCheckIcon,
  clipboard: ClipboardIcon,
  database: DatabaseIcon,
  globe: GlobeIcon,
  package: PackageIcon,
  "clipboard-list": ClipboardListIcon,
  "clipboard-check": ClipboardCheckIcon,
  "file-text": FileTextIcon,
  "file-check": FileCheckCornerIcon,
  "file-badge": FileBadgeIcon,
  presentation: PresentationIcon,
  "chart-bar": ChartBarStackedIcon,
  "chart-line": ChartLineIcon,
  calendar: CalendarIcon,
  timer: TimerIcon,
  clock: ClockIcon,
  wrench: WrenchIcon,
  tool: ToolCaseIcon,
  
};

export const IconKeys = Object.keys(academicIcons) as (keyof typeof academicIcons)[];

export const getAcademicIcon = (key: keyof typeof academicIcons): LucideIconData => {
  return academicIcons[key];
};
