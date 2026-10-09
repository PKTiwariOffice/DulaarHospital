import { z } from "zod";

export const DEPARTMENTS = [
  "Pediatrics & Newborn Care",
  "Obstetrics & Gynecology",
  "General Medicine",
  "General Surgery",
  "Critical Care / NICU",
  "Emergency (24x7)",
] as const;

export const TIME_SLOTS = [
  "Morning: 08:00 AM - 11:00 AM",
  "Mid-day: 11:00 AM - 02:00 PM",
  "Afternoon: 02:00 PM - 05:00 PM",
  "Evening: 05:00 PM - 08:00 PM",
  "Night: 08:00 PM - 11:00 PM",
  "Any time / Emergency (24x7)",
] as const;

export const appointmentSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter the patient's name")
    .max(80, "Name is too long"),
  age: z
    .string()
    .min(1, "Please enter the age")
    .regex(/^\d{1,3}(\.\d)?$/, "Enter a valid age (e.g. 4 or 0.5 years)"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  department: z.string().min(1, "Please select a department"),
  date: z.string().min(1, "Please choose a preferred date"),
  timeSlot: z.string().min(1, "Please choose a time slot"),
  symptoms: z
    .string()
    .max(500, "Please keep the notes under 500 characters")
    .optional()
    .or(z.literal("")),
});

export type AppointmentValues = z.infer<typeof appointmentSchema>;
