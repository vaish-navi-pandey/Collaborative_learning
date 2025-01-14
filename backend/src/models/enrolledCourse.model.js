// src/models/enrolledCourse.model.js
import { model, Schema } from 'mongoose';

const EnrolledCourseSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    course: { type: Schema.Types.ObjectId, ref: 'course', required: true },
    status: { 
      type: String, 
      enum: ['enrolled', 'in-progress', 'completed'], 
      default: 'enrolled' 
    },
    enrolledAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const EnrolledCourseModel = model('EnrolledCourse', EnrolledCourseSchema);
