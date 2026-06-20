
import {
  LucideIconData,
  Folder,
  File,
  FileText,
  Image,
  FileBraces
} from 'lucide-angular';
import { FileMetadata, Metadata } from '~/core/types';


export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB'];
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  const value = bytes / Math.pow(k, i);

  return `${value.toFixed(2)} ${units[i]}`;
}



export function getMetadataIcon(item: Metadata): LucideIconData {
  if (item.type === 'FOLDER') {
    return Folder;
  }

  if (item.type === "FILE") {
    const file: FileMetadata = item as FileMetadata;
    if (file.mime_type?.includes('image')) {
    return Image;
    }

    if (file.mime_type?.includes('pdf') || file.mime_type?.includes('word')) {
        return FileText;
    }

    if (file.mime_type?.includes('json')) {
        return FileBraces;
    }
  }

  return File;
}