'use client';

import Input from '@/components/ui/Input';

export interface ParticipantData {
  participant_name: string;
  email: string;
  phone: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  medical_notes: string;
  age: string;
  parent_guardian_name: string;
  parent_guardian_email: string;
}

interface ParticipantFormProps {
  data: ParticipantData;
  onChange: (data: ParticipantData) => void;
  errors: Partial<Record<keyof ParticipantData, string>>;
  isYouthProgram: boolean;
}

export default function ParticipantForm({ data, onChange, errors, isYouthProgram }: ParticipantFormProps) {
  const update = (field: keyof ParticipantData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-stone-900">Participant Information</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          value={data.participant_name}
          onChange={(e) => update('participant_name', e.target.value)}
          error={errors.participant_name}
          required
        />
        <Input
          label="Email"
          type="email"
          value={data.email}
          onChange={(e) => update('email', e.target.value)}
          error={errors.email}
          required
        />
        <Input
          label="Phone"
          type="tel"
          value={data.phone}
          onChange={(e) => update('phone', e.target.value)}
          error={errors.phone}
          required
        />
        {isYouthProgram && (
          <Input
            label="Participant Age"
            type="number"
            min="10"
            max="16"
            value={data.age}
            onChange={(e) => update('age', e.target.value)}
            error={errors.age}
            required
          />
        )}
      </div>

      <div className="border-t border-stone-200 pt-6">
        <h4 className="text-md font-semibold text-stone-800 mb-4">Emergency Contact</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Emergency Contact Name"
            value={data.emergency_contact_name}
            onChange={(e) => update('emergency_contact_name', e.target.value)}
            error={errors.emergency_contact_name}
            required
          />
          <Input
            label="Emergency Contact Phone"
            type="tel"
            value={data.emergency_contact_phone}
            onChange={(e) => update('emergency_contact_phone', e.target.value)}
            error={errors.emergency_contact_phone}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="medical-notes" className="block text-sm font-medium text-stone-700 mb-1">
          Medical Notes (optional)
        </label>
        <textarea
          id="medical-notes"
          rows={3}
          value={data.medical_notes}
          onChange={(e) => update('medical_notes', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder:text-stone-400"
          placeholder="Allergies, medications, or conditions we should know about..."
        />
      </div>

      {isYouthProgram && (
        <div className="border-t border-stone-200 pt-6">
          <h4 className="text-md font-semibold text-stone-800 mb-4">Parent / Guardian</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Parent/Guardian Name"
              value={data.parent_guardian_name}
              onChange={(e) => update('parent_guardian_name', e.target.value)}
              error={errors.parent_guardian_name}
              required
            />
            <Input
              label="Parent/Guardian Email"
              type="email"
              value={data.parent_guardian_email}
              onChange={(e) => update('parent_guardian_email', e.target.value)}
              error={errors.parent_guardian_email}
              required
            />
          </div>
        </div>
      )}
    </div>
  );
}
