// import { PartialType } from '@nestjs/mapped-types'; // todas las propiedades del createDto las hace opcionales
// import { CreateBrandDto } from './create-brand.dto';

import { IsString, MinLength } from "class-validator";

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
export class UpdateBrandDto{
    @IsString()
    @MinLength(1)
    name: string;
}