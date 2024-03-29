import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Category extends Document{

    @Prop({
        type: String,
        isRequired: true,
        minlength: 5
    })
    description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
