const Member = require("../models/memberModel");

exports.createMember = async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    return res.status(201).json({
      status: "success",
      data: member,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ error: "Member not found" });
    return res.json({
      status: "success",
      data: member
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    return res.json({
      status: "success",
      length: members.length,
      data: members,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!member) return res.status(404).json({ error: "Member not found" });
    return res.status(200).json({
      status: "success",
      data: member,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ error: "Member not found" });
    res.json({ message: "Member deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
