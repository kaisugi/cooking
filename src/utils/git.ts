import { execSync } from 'child_process';

/**
 * リポジトリの最終更新日を日本語形式で取得
 * @returns 日本語形式の日付（例: "2025年12月25日"）、取得失敗時は "不明"
 */
export function getLastUpdateDate(): string {
  try {
    // Git コミットのタイムスタンプを取得（Unix timestamp）
    const timestampStr = execSync('git log -1 --format=%ct', {
      encoding: 'utf8',
      cwd: process.cwd(),
    }).trim();

    const timestamp = parseInt(timestampStr, 10);

    if (isNaN(timestamp)) {
      return '不明';
    }

    // Unix timestampをミリ秒に変換してDateオブジェクト化
    const date = new Date(timestamp * 1000);

    // 日本語形式にフォーマット
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}年${month}月${day}日`;
  } catch (error) {
    console.warn('Failed to get last update date from Git:', error);
    return '不明';
  }
}
