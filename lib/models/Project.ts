import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  subtitle: string;
  description: string
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const Project = mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);