import { Request, Response } from "express";
import fetch from "node-fetch";
import { ICommit } from "../interfaces/commit.interface";

export const commits = async (req: Request, res: Response) => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/gvillegasc/githubapp/commits"
    );
    const commits: ICommit[] = await response.json();
    return res.status(200).json({
      commits,
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};
