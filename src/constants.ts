export const Sysex = {
  Start: 0xF0,
  End: 0xF7,
  Manufacturer: 0x47, // Akai Professional
  Model: [0x7F, 0x75], // Model LPD8
  Actions: {
    GetProgram: [0x63, 0x00, 0x01],
    SendProgram: [0x61, 0x00, 0x3A],
    GetActiveBank: [0x64, 0x00, 0x00],
    SetActiveBank: [0x62, 0x00, 0x01],
  }
}