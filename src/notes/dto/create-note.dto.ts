import {IsBoolean, IsNotEmpty, IsOptional, IsString} from 'class-validator';
export class CreateNoteDto {
    @IsNotEmpty()
    @IsString()
    title:string;
    
    @IsNotEmpty()
    @IsString()
    body:string;

    @IsNotEmpty()
    @IsString()
    color:string;

    @IsNotEmpty()
    @IsOptional()
    @IsBoolean()
    isPinned:boolean;
}
