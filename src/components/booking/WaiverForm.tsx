'use client';

import Input from '@/components/ui/Input';

const WAIVER_TEXT = `LIABILITY WAIVER AND ASSUMPTION OF RISK — Trinity River International Kayak School

I acknowledge that whitewater kayaking is an inherently dangerous activity that involves risks including but not limited to: drowning, hypothermia, physical injury from rocks, equipment, or river features, exposure to weather conditions, and encounters with wildlife.

I voluntarily assume all risks associated with participation in T.R.I.K.S. programs, including transportation to and from river access points.

I release, indemnify, and hold harmless Trinity River International Kayak School, its owner Gabriella Emerick, its guides, instructors, employees, and agents from any and all liability, claims, demands, or causes of action arising from my participation.

I confirm that I am physically able to participate and have disclosed any medical conditions that may affect my participation.

For participants under 18: I am the parent or legal guardian and give permission for the named minor to participate. I accept these terms on their behalf.`;

export interface WaiverData {
  signature: string;
  agreed: boolean;
}

interface WaiverFormProps {
  data: WaiverData;
  onChange: (data: WaiverData) => void;
  errors: { signature?: string; agreed?: string };
}

export default function WaiverForm({ data, onChange, errors }: WaiverFormProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-stone-900">Liability Waiver</h3>
      <p className="text-sm text-stone-600">
        Please read the waiver below carefully, type your full legal name as your signature, and
        check the box to agree.
      </p>

      {/* Scrollable waiver text */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 max-h-64 overflow-y-auto">
        <pre className="whitespace-pre-wrap text-sm text-stone-700 font-sans leading-relaxed">
          {WAIVER_TEXT}
        </pre>
      </div>

      {/* Signature */}
      <Input
        label="Type Your Full Legal Name (Signature)"
        placeholder="Your full legal name"
        value={data.signature}
        onChange={(e) => onChange({ ...data, signature: e.target.value })}
        error={errors.signature}
        required
      />

      {/* Checkbox */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={data.agreed}
          onChange={(e) => onChange({ ...data, agreed: e.target.checked })}
          className="mt-1 h-5 w-5 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
        />
        <span className="text-sm text-stone-700">
          I have read and agree to the terms of the liability waiver above. I understand the risks
          involved in whitewater kayaking.
        </span>
      </label>
      {errors.agreed && <p className="text-sm text-red-600">{errors.agreed}</p>}
    </div>
  );
}
